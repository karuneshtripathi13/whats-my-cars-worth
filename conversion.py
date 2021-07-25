def convert(seller,avg_cost_price,fuel,transmission,brd,modl,year,mileage,engine,kms_driven,max_power,seats):
    sellertype={'Individual':0,'Dealer':0.5, 'Trustmark Dealer':1}
    fueltype={'Petrol':0, 'Diesel':0.333333, 'CNG':0.666666, 'LPG':1}
    transmissiontype={'Manual':0, 'Automatic':1}
    brand={'Maruti' : 0.0,
    'Hyundai' : 0.06666666666666667,
    'Ford' : 0.13333333333333333,
    'Renault' : 0.2,
    'Toyota' : 0.26666666666666666,
    'Volkswagen' : 0.3333333333333333,
    'Honda' : 0.4,
    'Mahindra' : 0.4666666666666667,
    'Datsun' : 0.5333333333333333,
    'Tata' : 0.6,
    'Kia' : 0.6666666666666666,
    'MG' : 0.7333333333333333,
    'Isuzu' : 0.8,
    'Skoda' : 0.8666666666666667,
    'Nissan' : 0.9333333333333333,
    'Jeep' : 1.0,}
    models={'Alto' : 0.0,
    'Grand' : 0.015625,
    'i20' : 0.03125,
    'Ecosport' : 0.046875,
    'Wagon R' : 0.0625,
    'i10' : 0.078125,
    'Venue' : 0.09375,
    'Swift' : 0.109375,
    'Verna' : 0.125,
    'Duster' : 0.140625,
    'Ciaz' : 0.15625,
    'Innova' : 0.171875,
    'Baleno' : 0.1875,
    'Swift Dzire' : 0.203125,
    'Vento' : 0.21875,
    'Creta' : 0.234375,
    'City' : 0.25,
    'Bolero' : 0.265625,
    'KWID' : 0.28125,
    'Amaze' : 0.296875,
    'Santro' : 0.3125,
    'XUV500' : 0.328125,
    'KUV100' : 0.34375,
    'Ignis' : 0.359375,
    'RediGO' : 0.375,
    'Scorpio' : 0.390625,
    'Marazzo' : 0.40625,
    'Aspire' : 0.421875,
    'Figo' : 0.4375,
    'Vitara' : 0.453125,
    'Tiago' : 0.46875,
    'Polo' : 0.484375,
    'Seltos' : 0.5,
    'Celerio' : 0.515625,
    'GO' : 0.53125,
    'KUV' : 0.546875,
    'Jazz' : 0.5625,
    'Tigor' : 0.578125,
    'Ertiga' : 0.59375,
    'Safari' : 0.609375,
    'Thar' : 0.625,
    'Eeco' : 0.640625,
    'Hector' : 0.65625,
    'Civic' : 0.671875,
    'D-Max' : 0.6875,
    'Rapid' : 0.703125,
    'Freestyle' : 0.71875,
    'Nexon' : 0.734375,
    'XUV300' : 0.75,
    'Dzire VXI' : 0.765625,
    'WR-V' : 0.78125,
    'XL6' : 0.796875,
    'Triber' : 0.8125,
    'Elantra' : 0.828125,
    'Yaris' : 0.84375,
    'S-Presso' : 0.859375,
    'Dzire LXI' : 0.875,
    'Kicks' : 0.890625,
    'Harrier' : 0.90625,
    'Compass' : 0.921875,
    'redi-GO' : 0.9375,
    'Glanza' : 0.953125,
    'Dzire ZXI' : 0.96875,
    'Altroz' : 0.984375,
    'Tucson' : 1.0,
    }
    if year>19.0:
        year=1.0
    else:
        year=year/19.0
    if mileage>33.54:
        mileage=1.0
    else:
        mileage=mileage/33.54
    if engine>2956.0:
        engine=1.0
    else:
        engine=engine/2956.0
    if kms_driven>293000.0:
        kms_driven=1.0
    else:
        kms_driven=kms_driven/293000.0
    if max_power>189.0:
        max_power=1.0
    else:
        max_power=max_power/189.0
    if seats>9.0:
        seats=1.0
    else:
        seats=seats/9.0
    if avg_cost_price>27.6:
        avg_cost_price=1.0
    else:
        avg_cost_price=avg_cost_price/27.6
    return sellertype[seller],avg_cost_price,fueltype[fuel],transmissiontype[transmission],brand[brd],models[modl],year,mileage,engine,kms_driven,max_power,seats