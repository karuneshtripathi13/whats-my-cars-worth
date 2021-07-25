import re
from flask import Flask
from flask.globals import request
from flask.json import jsonify
import tensorflow as tf
from tensorflow import keras
from flask_cors import CORS
from conversion import *
import locale
import numpy as np
model=keras.Sequential([
    keras.layers.Dense(300,input_shape=(12,),activation='relu'),
    keras.layers.Dense(300,activation='relu'),
    keras.layers.Dense(200,activation='relu'),
    keras.layers.Dense(100,activation='relu'),
    keras.layers.Dense(100,activation='relu'),
    keras.layers.Dense(100,activation='relu'),
    keras.layers.Dense(1)
])
model.compile(optimizer='adam',loss='mean_squared_error')
model.load_weights('model.h5')
app = Flask(__name__)
CORS(app)
@app.route("/getpred",methods=['POST'])
def getpred():
    content = request.get_json()
    year=float(content['year'])
    seller_type=content['seller_type']
    kms_driven=float(content['kms_driven'])
    avg_cost_price=float(content['New_Car_Price'])
    fuel_type=content["fuel_type"]
    transmission_type=content["transmission_type"]
    mileage=float(content['mileage'])
    engine=float(content['engine'])
    max_power=float(content['max_power'])
    seats=float(content['seats'])
    brand=content['brand']
    mdl=content['model']
    seller_type,avg_cost_price,fuel_type,transmission_type,brand,mdl,year,mileage,engine,kms_driven,max_power,seats=convert(seller_type,avg_cost_price,fuel_type,transmission_type,brand,mdl,year,mileage,engine,kms_driven,max_power,seats)
    ip=np.array([brand,mdl,year,kms_driven,seller_type,fuel_type,transmission_type,mileage,engine,max_power,seats,avg_cost_price])
    result=model.predict(ip.reshape(1,12))
    result=result[0][0]
    result=result*22.25*100000
    result=round(result)
    result=result-100000
    avg_cost_price=(round(avg_cost_price*27.6*100000))
    if avg_cost_price<result+50000:
        result=result-(result+50000-avg_cost_price)-50000
    st=locale.format("%d", result-50000, grouping=True)
    ed=locale.format("%d", result+50000, grouping=True)
    locale.setlocale(locale.LC_NUMERIC, 'hi_IN')
    result=f'Rs. {st} - Rs. {ed}'
    return jsonify({"result":result})
if __name__=='__main__':
    app.run(debug=True,port=5000)