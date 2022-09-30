var APP_DATA = {
  "scenes": [
    {
      "id": "0-external-car-park-entry",
      "name": "External Car Park Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.5122161935200396,
        "pitch": 0.05888949502432439,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.5309145886855786,
          "pitch": 0.12240371722268861,
          "rotation": 7.853981633974483,
          "target": "1-external-car-park-exit"
        },
        {
          "yaw": -0.02770928643075088,
          "pitch": 0.04083149250045537,
          "rotation": 1.5707963267948966,
          "target": "2-car-park--bike-shelter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-external-car-park-exit",
      "name": "External Car Park Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.610989714582697,
        "pitch": 0.1208140205520074,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.6038033822070474,
          "pitch": 0.04518395631767902,
          "rotation": 1.5707963267948966,
          "target": "0-external-car-park-entry"
        },
        {
          "yaw": -1.8693938986213343,
          "pitch": -0.02100463120418894,
          "rotation": 1.5707963267948966,
          "target": "7-foot-path-to-main-entrance-"
        },
        {
          "yaw": 3.098129221029491,
          "pitch": -0.032966275085033914,
          "rotation": 1.5707963267948966,
          "target": "2-car-park--bike-shelter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-car-park--bike-shelter",
      "name": "Car Park & Bike Shelter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.37231448625423624,
          "pitch": -0.004144722212863883,
          "rotation": 4.71238898038469,
          "target": "3-main-entrance"
        },
        {
          "yaw": -1.491743098647678,
          "pitch": 0.03707714769474357,
          "rotation": 0,
          "target": "4-main-car-park-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-entrance",
      "name": "Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.14021300038495355,
        "pitch": -0.0025119068927139665,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.7300024925283584,
          "pitch": -0.04953085616687325,
          "rotation": 0,
          "target": "0-external-car-park-entry"
        },
        {
          "yaw": 1.3182847015147274,
          "pitch": -0.06392985246562866,
          "rotation": 5.497787143782138,
          "target": "1-external-car-park-exit"
        },
        {
          "yaw": 0.012948195063675172,
          "pitch": 0.01984117824081011,
          "rotation": 0,
          "target": "8-lobby-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-car-park-area",
      "name": "Main Car Park Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04750083560284679,
          "pitch": 0.01999583826902729,
          "rotation": 10.995574287564278,
          "target": "2-car-park--bike-shelter"
        },
        {
          "yaw": 3.0055289296111294,
          "pitch": 0.025462215615366546,
          "rotation": 0,
          "target": "5-rear-car-park-"
        },
        {
          "yaw": -2.7937137575483284,
          "pitch": 0.01846385918657667,
          "rotation": 1.5707963267948966,
          "target": "6-side-gate--fire-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-rear-car-park-",
      "name": "Rear Car park ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.8385619716127497,
        "pitch": 0.04368654752180667,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.531644148408458,
          "pitch": 0.06261539850826736,
          "rotation": 0,
          "target": "4-main-car-park-area"
        },
        {
          "yaw": -0.03217492262352373,
          "pitch": 0.12051708675913986,
          "rotation": 0,
          "target": "6-side-gate--fire-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-side-gate--fire-exit",
      "name": "Side Gate & Fire Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.4325519731915861,
        "pitch": 0.009814915837392135,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.7180562420134349,
          "pitch": 0.10555881825322544,
          "rotation": 0,
          "target": "5-rear-car-park-"
        },
        {
          "yaw": -1.3396749810327595,
          "pitch": 0.056405031150791984,
          "rotation": 7.853981633974483,
          "target": "7-foot-path-to-main-entrance-"
        },
        {
          "yaw": 0.19004699318612595,
          "pitch": 0.23006390977088564,
          "rotation": 0,
          "target": "26-gf-corridor-4"
        },
        {
          "yaw": -0.7282887641359572,
          "pitch": 0.06456357452201544,
          "rotation": 1.5707963267948966,
          "target": "27-0057-stair-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-foot-path-to-main-entrance-",
      "name": "Foot Path to Main Entrance ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 1.0545915741089154,
        "pitch": -0.07719211631824052,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.13009698754892973,
          "pitch": -0.04829720571973617,
          "rotation": 3.141592653589793,
          "target": "1-external-car-park-exit"
        },
        {
          "yaw": 1.9052642486408669,
          "pitch": 0.0485702058054418,
          "rotation": 4.71238898038469,
          "target": "6-side-gate--fire-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lobby-",
      "name": "Lobby ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.119672516046627,
        "pitch": -0.019708919868623553,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.06498365958612595,
          "pitch": 0.1373174441015017,
          "rotation": 0,
          "target": "3-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-0015-reception-area",
      "name": "00.15 Reception Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.2224881789286925,
        "pitch": 0.07313210548980287,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.2524195896210273,
          "pitch": 0.043149641874896005,
          "rotation": 0,
          "target": "12-a-0056-lift-lobby"
        },
        {
          "yaw": -0.8868291170980385,
          "pitch": 0.02346964191623968,
          "rotation": 0,
          "target": "10-0016-reception-office"
        },
        {
          "yaw": -2.127260411219037,
          "pitch": 0.021937888404153227,
          "rotation": 4.71238898038469,
          "target": "15-gf-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-0016-reception-office",
      "name": "00.16 Reception Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.4865830467234886,
        "pitch": 0.043342952657464906,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.3535228863715307,
          "pitch": 0.11039739206077392,
          "rotation": 10.995574287564278,
          "target": "9-0015-reception-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-0017-managers--office",
      "name": "00.17 Managers  Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.4530678522941436,
        "pitch": 0.0018752636092358443,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.03041275861242454,
          "pitch": 0.04929346101014431,
          "rotation": 0,
          "target": "10-0016-reception-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-a-0056-lift-lobby",
      "name": "A-00.56 Lift Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19883309255422432,
          "pitch": 0.10197630569014571,
          "rotation": 0,
          "target": "9-0015-reception-area"
        },
        {
          "yaw": -1.3692197271334976,
          "pitch": 0.11127986761514741,
          "rotation": 0,
          "target": "13-a-0055-stair-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-a-0055-stair-01",
      "name": "A-00.55 Stair 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 1.5071966692323642,
        "pitch": -0.013086554449849075,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.1762136170254074,
          "pitch": -0.20926874345868995,
          "rotation": 0.7853981633974483,
          "target": "14-a-0055-stair-01-landing"
        },
        {
          "yaw": -0.124799776001284,
          "pitch": 0.07049616271810422,
          "rotation": 0,
          "target": "12-a-0056-lift-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-a-0055-stair-01-landing",
      "name": "A-00.55 Stair 01 Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.020486695492781593,
        "pitch": 0.1570386533981889,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.3233531031792811,
          "pitch": -0.3680135912975011,
          "rotation": 0,
          "target": "47-b-0152-stair-01"
        },
        {
          "yaw": 0.028518069762268894,
          "pitch": 0.4667767221040773,
          "rotation": 0,
          "target": "13-a-0055-stair-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-gf-corridor-1",
      "name": "GF Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -3.036731758437867,
        "pitch": 0.03178618573063474,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.21188948738222102,
          "pitch": 0.03146808602484619,
          "rotation": 0,
          "target": "9-0015-reception-area"
        },
        {
          "yaw": -1.4341061209087975,
          "pitch": 0.1761728225820729,
          "rotation": 0,
          "target": "18-0009-a1-large-lecture"
        },
        {
          "yaw": 2.8860941901602564,
          "pitch": 0.03679373254570706,
          "rotation": 4.71238898038469,
          "target": "21-0052-wc-circulation"
        },
        {
          "yaw": -3.020130470476694,
          "pitch": 0.05283969964662383,
          "rotation": 0,
          "target": "16-gf-corridor-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6547162429176066,
          "pitch": 0.11441790794725826,
          "title": "00.014 Cleaners Cupboard",
          "text": "Locked door unable to add to tour&nbsp;"
        }
      ]
    },
    {
      "id": "16-gf-corridor-2",
      "name": "GF Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.8001439053602972,
        "pitch": 0.05213793564522007,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.4435139177598977,
          "pitch": 0.13056377688555187,
          "rotation": 0,
          "target": "19-0009-a2-large-lecture"
        },
        {
          "yaw": 1.9983629773652645,
          "pitch": 0.09316675217511516,
          "rotation": 0,
          "target": "23-0014-kitchen"
        },
        {
          "yaw": 0.01639902962816464,
          "pitch": 0.044186813676173387,
          "rotation": 0,
          "target": "15-gf-corridor-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.732339799019581,
          "pitch": 0.06328799653676676,
          "title": "00.08 Store room&nbsp;",
          "text": "Locked Door unable to add to tour&nbsp;"
        }
      ]
    },
    {
      "id": "17-gf-corridor-3",
      "name": "GF Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.748810899480521,
        "pitch": 0.04520694329930919,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.024604846996380658,
          "pitch": 0.07018705447840468,
          "rotation": 0,
          "target": "16-gf-corridor-2"
        },
        {
          "yaw": -2.477195464653967,
          "pitch": 0.05333071455033078,
          "rotation": 1.5707963267948966,
          "target": "24-0007-a3-medium-meeting"
        },
        {
          "yaw": 2.8893903899273905,
          "pitch": 0.05123705341232565,
          "rotation": 4.71238898038469,
          "target": "25-0013-a4-medium-meeting"
        },
        {
          "yaw": 3.1353808676940034,
          "pitch": 0.02473800322142239,
          "rotation": 0,
          "target": "26-gf-corridor-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6098701094470531,
          "pitch": 0.07414598469234157,
          "title": "00.08 Store Room&nbsp;",
          "text": "Locked Door unable to add this room to the tour"
        },
        {
          "yaw": -2.8439820825077806,
          "pitch": 0.14756263533461578,
          "title": "00.20 Riser",
          "text": "Locked Door - Unable to add&nbsp; this room to the tour&nbsp;"
        }
      ]
    },
    {
      "id": "18-0009-a1-large-lecture",
      "name": "00.09 A1 Large Lecture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.020591736568999153,
        "pitch": 0.13514089958591846,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.7072131068403653,
          "pitch": -0.021638442461007656,
          "rotation": 0,
          "target": "20-0018-store"
        },
        {
          "yaw": -3.0796945787298977,
          "pitch": 0.06111867449122599,
          "rotation": 0,
          "target": "15-gf-corridor-1"
        },
        {
          "yaw": -0.8737558200229358,
          "pitch": -0.04742974626229923,
          "rotation": 0,
          "target": "19-0009-a2-large-lecture"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-0009-a2-large-lecture",
      "name": "00.09 A2 Large Lecture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.8686748195463743,
        "pitch": 0.22719415700329648,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.8774309517451062,
          "pitch": 0.02786996090283722,
          "rotation": 1.5707963267948966,
          "target": "15-gf-corridor-1"
        },
        {
          "yaw": -2.290720261402784,
          "pitch": 0.008855800331136976,
          "rotation": 0,
          "target": "18-0009-a1-large-lecture"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-0018-store",
      "name": "00.18 Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -3.0024926612158325,
        "pitch": 0.04973180489543161,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "21-0052-wc-circulation",
      "name": "00.52 WC Circulation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 2.5887478974721834,
        "pitch": 0.07169760786955948,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.04435019258602857,
          "pitch": 0.10251311101453275,
          "rotation": 0,
          "target": "16-gf-corridor-2"
        },
        {
          "yaw": 2.793357568977349,
          "pitch": 0.06283213475342642,
          "rotation": 4.71238898038469,
          "target": "22-0006-acc-wc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5254684318316247,
          "pitch": 0.09289152603722783,
          "title": "Riser",
          "text": ""
        },
        {
          "yaw": -0.507612928367779,
          "pitch": -0.016409043185058536,
          "title": "00.01 WC",
          "text": ""
        },
        {
          "yaw": -1.8689058197706725,
          "pitch": -0.0023786973705384185,
          "title": "00.02 WC",
          "text": ""
        },
        {
          "yaw": -2.682419073431385,
          "pitch": 0.0734160706118061,
          "title": "00.03 Semi Amb WC",
          "text": ""
        },
        {
          "yaw": 1.6738210540269511,
          "pitch": 0.32241578352349265,
          "title": "00.05 WC",
          "text": ""
        }
      ]
    },
    {
      "id": "22-0006-acc-wc",
      "name": "00.06 Acc. WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -3.0421950861733915,
        "pitch": 0.021422288795665878,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.07647214923794188,
          "pitch": 0.12234194023166012,
          "rotation": 0,
          "target": "21-0052-wc-circulation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-0014-kitchen",
      "name": "00.14 Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.4830976693323628,
        "pitch": -0.029459812259377216,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "24-0007-a3-medium-meeting",
      "name": "00.07 A3 Medium Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.8742699976275823,
        "pitch": 0.019601515689492643,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.0032327724008069936,
          "pitch": 0.06293114479687745,
          "rotation": 0,
          "target": "17-gf-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-0013-a4-medium-meeting",
      "name": "00.13 A4 Medium Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.011623548641886,
        "pitch": 0.23710727013356703,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.8434917402518938,
          "pitch": 0.05521527523653802,
          "rotation": 0,
          "target": "17-gf-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-gf-corridor-4",
      "name": "GF Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 2.910806197182769,
        "pitch": 0.10627097501068938,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.14306985375728587,
          "pitch": 0.12411970637191772,
          "rotation": 0,
          "target": "17-gf-corridor-3"
        },
        {
          "yaw": 2.9429991002517486,
          "pitch": 0.141811689526806,
          "rotation": 10.995574287564278,
          "target": "6-side-gate--fire-exit"
        },
        {
          "yaw": -2.1024042286839,
          "pitch": 0.09115264684303526,
          "rotation": 0,
          "target": "27-0057-stair-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.617007703124866,
          "pitch": 0.03659509074809009,
          "title": "00.11 Comms Room&nbsp;",
          "text": "Locked Door&nbsp; - Unabale to add this room to the tour&nbsp;"
        }
      ]
    },
    {
      "id": "27-0057-stair-02",
      "name": "00.57 Stair 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.14913507050956554,
        "pitch": -0.034281741880146654,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.5085583247640209,
          "pitch": -0.04815714976483321,
          "rotation": 1.5707963267948966,
          "target": "7-foot-path-to-main-entrance-"
        },
        {
          "yaw": -2.7429694445225365,
          "pitch": 0.10705831354658102,
          "rotation": 0,
          "target": "26-gf-corridor-4"
        },
        {
          "yaw": 0.22279094077627448,
          "pitch": -0.4161124965375844,
          "rotation": 17.27875959474387,
          "target": "28-a0057-stair-02-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-a0057-stair-02-landing",
      "name": "A00.57 Stair 02 Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.127040177121584,
        "pitch": 0.04987870431796715,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.86578149253387,
          "pitch": 0.2943438354788963,
          "rotation": 3.141592653589793,
          "target": "27-0057-stair-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-b-0160-stair-02",
      "name": "B-01.60 Stair 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.081563107393812,
        "pitch": 0.12808261160880186,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.974520165020188,
          "pitch": 0.4692868696989425,
          "rotation": 1.5707963267948966,
          "target": "28-a0057-stair-02-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-b-0113-lobby",
      "name": "B-01.13 Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.46896238162282344,
        "pitch": 0.04907457918693403,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.6161927837918526,
          "pitch": 0.08272888969138847,
          "rotation": 0,
          "target": "29-b-0160-stair-02"
        },
        {
          "yaw": 0.22853758725806905,
          "pitch": 0.08285384180198108,
          "rotation": 0,
          "target": "31-b-1f-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-b-1f-corridor-1",
      "name": "B-1F Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.7601902807908303,
        "pitch": -0.014055735433398553,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.3746992456999703,
          "pitch": 0.05621333219729152,
          "rotation": 0,
          "target": "30-b-0113-lobby"
        },
        {
          "yaw": 0.7795112863444338,
          "pitch": 0.0749264702685899,
          "rotation": 4.71238898038469,
          "target": "32-b_0114-b5-small-meeting"
        },
        {
          "yaw": -2.9661402269802775,
          "pitch": 0.15202305865415866,
          "rotation": 5.497787143782138,
          "target": "33-b-0109-b4-medium-meeting"
        },
        {
          "yaw": -1.149446443017819,
          "pitch": 0.022161555030550062,
          "rotation": 7.853981633974483,
          "target": "34-b-0116-b6-interview-meeting"
        },
        {
          "yaw": -1.3759043233772061,
          "pitch": -0.07365637742639031,
          "rotation": 14.137166941154074,
          "target": "36-b-0117-b7-small-meeting"
        },
        {
          "yaw": -1.6512396061459,
          "pitch": 0.03909591901115306,
          "rotation": 0,
          "target": "37-b-1f-corridor-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3827388548278705,
          "pitch": 0.021037837729288356,
          "title": "B-01.15 Store room&nbsp;",
          "text": "Store room not added to the tour"
        },
        {
          "yaw": -1.977661615388234,
          "pitch": 0.009228010392151376,
          "title": "B-01.10 Riser",
          "text": "Locked door unable to add this room to the tour<br>"
        }
      ]
    },
    {
      "id": "32-b_0114-b5-small-meeting",
      "name": "B_01.14 B5 Small Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.2474639060088002,
        "pitch": 0.036973190540456,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.683535053066123,
          "pitch": 0.05216152351814074,
          "rotation": 0,
          "target": "31-b-1f-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-b-0109-b4-medium-meeting",
      "name": "B-01.09 B4 Medium Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 1.2398703769987236,
        "pitch": -0.018078264454592485,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.5170042769727559,
          "pitch": 0.029426516098705946,
          "rotation": 0,
          "target": "31-b-1f-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-b-0116-b6-interview-meeting",
      "name": "B-01.16 B6 Interview Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 2.8177669563610124,
        "pitch": -0.07673639332936766,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.5449796154445465,
          "pitch": 0.09629731974804834,
          "rotation": 0,
          "target": "31-b-1f-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-b-0108-b3-interview-meeting",
      "name": "B-01.08 B3 Interview Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "36-b-0117-b7-small-meeting",
      "name": "B-01.17 B7 Small Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.3323713966841275,
        "pitch": 0.04907457918693403,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.615573370976888,
          "pitch": 0.0689093758753625,
          "rotation": 0,
          "target": "37-b-1f-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-b-1f-corridor-2",
      "name": "B-1F Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.142915964746834,
        "pitch": 0.010710916496964984,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.1238586187249764,
          "pitch": 0.07952511470480772,
          "rotation": 1.5707963267948966,
          "target": "35-b-0108-b3-interview-meeting"
        },
        {
          "yaw": 1.2382068873162773,
          "pitch": 0.0816299908663467,
          "rotation": 4.71238898038469,
          "target": "36-b-0117-b7-small-meeting"
        },
        {
          "yaw": 1.53315508683752,
          "pitch": 0.09385205677046571,
          "rotation": 0,
          "target": "31-b-1f-corridor-1"
        },
        {
          "yaw": -3.0873820977081063,
          "pitch": 0.10384620611843687,
          "rotation": 0,
          "target": "38-b-0107-b2-large-lecture"
        },
        {
          "yaw": -1.5961067925024004,
          "pitch": 0.12562254780392834,
          "rotation": 0,
          "target": "40-b-1f-corridor-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8173319169666566,
          "pitch": -0.012642929324549357,
          "title": "B-01.10 Riser",
          "text": "Locked door unable to add this room to the tour"
        }
      ]
    },
    {
      "id": "38-b-0107-b2-large-lecture",
      "name": "B-01.07 B2 Large Lecture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.8538128427124398,
        "pitch": 0.08871876793599753,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.2538716876064715,
          "pitch": 0.0160828051839772,
          "rotation": 0,
          "target": "37-b-1f-corridor-2"
        },
        {
          "yaw": -0.4212587344335823,
          "pitch": 0.00890732087148649,
          "rotation": 0,
          "target": "40-b-1f-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-b-0107-b1-large-lecture",
      "name": "B-01.07 B1 Large Lecture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.7057197775234698,
        "pitch": -0.0032716386124569397,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.5818583985611951,
          "pitch": -0.0146501296862791,
          "rotation": 4.71238898038469,
          "target": "37-b-1f-corridor-2"
        },
        {
          "yaw": -1.3905780620428096,
          "pitch": 0.09916686900542082,
          "rotation": 10.995574287564278,
          "target": "40-b-1f-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-b-1f-corridor-3",
      "name": "B-1F Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2939251906229465,
          "pitch": 0.07717694924548368,
          "rotation": 0,
          "target": "39-b-0107-b1-large-lecture"
        },
        {
          "yaw": -3.0742876628598044,
          "pitch": 0.026654136988437216,
          "rotation": 0,
          "target": "37-b-1f-corridor-2"
        },
        {
          "yaw": 2.6959345714754956,
          "pitch": 0.07672903051745195,
          "rotation": 4.71238898038469,
          "target": "41-b-0151-wc-circulation"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.11719823220721,
          "pitch": 0.03450242751717525,
          "title": "B-01.21 Cleaners Cupboard&nbsp;",
          "text": ""
        },
        {
          "yaw": -0.2259854151131151,
          "pitch": 0.0555152710614184,
          "title": "B-01.56 Riser",
          "text": "Locked door unable to add this room to the tour"
        }
      ]
    },
    {
      "id": "41-b-0151-wc-circulation",
      "name": "B-01.51 WC Circulation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.1428022544187328,
        "pitch": 0.058915323709767264,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.71873505530864,
          "pitch": 0.061317215838485595,
          "rotation": 0,
          "target": "40-b-1f-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-b-1f-corridor-4",
      "name": "B-1F Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.286713793293764,
        "pitch": 0.09039511439955383,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.7901040719707293,
          "pitch": -0.040639202328648594,
          "rotation": 0,
          "target": "44-b-0127-b9-small-meeting"
        },
        {
          "yaw": 0.30632998406375833,
          "pitch": -0.014230859540361962,
          "rotation": 4.71238898038469,
          "target": "43-b-0126-b8-interview-meeting"
        },
        {
          "yaw": 0.921262602646669,
          "pitch": 0.030233007882348062,
          "rotation": 0,
          "target": "40-b-1f-corridor-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.417211534928903,
          "pitch": 0.03858955499638128,
          "title": "B-01.55 Riser",
          "text": "Locked Door&nbsp; - Unable to add this room to the tour&nbsp;"
        },
        {
          "yaw": 0.6068971792847311,
          "pitch": 0.1429305387251567,
          "title": "B- 01.25 Gen Store&nbsp;",
          "text": ""
        }
      ]
    },
    {
      "id": "43-b-0126-b8-interview-meeting",
      "name": "B-01.26 B8 Interview Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.894079465780969,
        "pitch": 0.1823626892828436,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.11991251463253327,
          "pitch": 0.11168217971892958,
          "rotation": 0,
          "target": "42-b-1f-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-b-0127-b9-small-meeting",
      "name": "B-01.27 B9 Small Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.9538604750255644,
        "pitch": -0.013086554449849075,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.2359170889326396,
          "pitch": 0.11423227615169473,
          "rotation": 7.853981633974483,
          "target": "42-b-1f-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-b-0154-lift-lobby",
      "name": "B-01.54 Lift Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -3.118213691584959,
        "pitch": 0.04406655511360924,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.17515714150927408,
          "pitch": 0.21889824865862373,
          "rotation": 0,
          "target": "42-b-1f-corridor-4"
        },
        {
          "yaw": -3.0277945656675023,
          "pitch": 0.09633958243712826,
          "rotation": 0,
          "target": "46-lift-internal-platform-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-lift-internal-platform-",
      "name": "Lift Internal Platform ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1347309290582892,
          "pitch": 0.17721872082893775,
          "rotation": 0,
          "target": "45-b-0154-lift-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-b-0152-stair-01",
      "name": "B-01.52 Stair 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.793046028793718,
          "pitch": 0.0076084875435853405,
          "rotation": 0,
          "target": "45-b-0154-lift-lobby"
        },
        {
          "yaw": 0.18244896947591904,
          "pitch": 0.4694608317882949,
          "rotation": 3.9269908169872414,
          "target": "14-a-0055-stair-01-landing"
        },
        {
          "yaw": -0.3199639016413851,
          "pitch": -0.2384240498606811,
          "rotation": 1.5707963267948966,
          "target": "48-b-0152-stair-01-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-b-0152-stair-01-landing",
      "name": "B-01.52 Stair 01 Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09807264617812095,
          "pitch": 0.31739713069489106,
          "rotation": 0,
          "target": "47-b-0152-stair-01"
        },
        {
          "yaw": -0.26301521548299256,
          "pitch": -0.2930760102613341,
          "rotation": 0.7853981633974483,
          "target": "50-c-0252-stair-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-c-0252-stair-01-landing",
      "name": "c-02.52 Stair 01 Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.0731340344746076,
        "pitch": 0.11546939384150967,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 3.041722029148657,
          "pitch": 0.40787246907030905,
          "rotation": 0,
          "target": "50-c-0252-stair-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-c-0252-stair-01",
      "name": "C-02.52 Stair 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.41180533306989986,
          "pitch": -0.23373558695609375,
          "rotation": 14.137166941154074,
          "target": "49-c-0252-stair-01-landing"
        },
        {
          "yaw": -0.014101738300649203,
          "pitch": 0.5144066902813069,
          "rotation": 0,
          "target": "48-b-0152-stair-01-landing"
        },
        {
          "yaw": -1.80189413465639,
          "pitch": 0.11576982277082593,
          "rotation": 0,
          "target": "51-c-0254-lift-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-c-0254-lift-lobby",
      "name": "C-02.54 Lift Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.075387348436143,
        "pitch": -0.0035449756254859466,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.3914272765853397,
          "pitch": 0.18340329430240132,
          "rotation": 0,
          "target": "52-c-2f-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-c-2f-corridor-1",
      "name": "C-2F Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.6177993127258858,
        "pitch": 0.034862763385071105,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.8244537591909058,
          "pitch": 0.1221741880753342,
          "rotation": 0,
          "target": "51-c-0254-lift-lobby"
        },
        {
          "yaw": 1.5984351732915112,
          "pitch": 0.08716743436958296,
          "rotation": 0,
          "target": "53-c-0219-c4-interview-meeting"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6976279763111535,
          "pitch": -0.05915069069335388,
          "title": "C-02.18 Office",
          "text": "Office in use was not permitted to add this room to the tour&nbsp;"
        },
        {
          "yaw": -1.958666313078492,
          "pitch": -0.049485120111638636,
          "title": "C-02.16 &amp; 17 Lockers room and Ass Shower Room&nbsp;",
          "text": "Both rooms were locked&nbsp; - unable to add these areas to the tour&nbsp;"
        },
        {
          "yaw": -1.1837601733926313,
          "pitch": 0.04655998554611429,
          "title": "C-02.58 Riser&nbsp;",
          "text": ""
        }
      ]
    },
    {
      "id": "53-c-0219-c4-interview-meeting",
      "name": "C-02.19 C4 Interview Meeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.11837885361354594,
        "pitch": -0.02290147028723233,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.9776112168042363,
          "pitch": 0.06619551595166406,
          "rotation": 0,
          "target": "52-c-2f-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-c-2f-corridor-2",
      "name": "C-2F Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.2434443448532733,
        "pitch": 0.0282368169024938,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.8149709179030857,
          "pitch": 0.16670138901635667,
          "rotation": 0,
          "target": "52-c-2f-corridor-1"
        },
        {
          "yaw": -2.9742351745822297,
          "pitch": 0.09299073658954526,
          "rotation": 0,
          "target": "55-c-0213-cleaners-store"
        },
        {
          "yaw": -1.8445143720108987,
          "pitch": 0.029502466856181186,
          "rotation": 4.71238898038469,
          "target": "56-c-0251-wc-circulation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-c-0213-cleaners-store",
      "name": "C-02.13 Cleaners Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.8268313644422616,
        "pitch": 0.005024003518114384,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.4849327406466735,
          "pitch": -0.0419328366759828,
          "rotation": 0,
          "target": "54-c-2f-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-c-0251-wc-circulation",
      "name": "C-02.51 WC Circulation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.27545848629301517,
        "pitch": 0.09160588114894352,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.9701343859107325,
          "pitch": 0.11721330532245844,
          "rotation": 0,
          "target": "54-c-2f-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-c-0202-c1-large-lecture",
      "name": "C-02.02 C1 Large Lecture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.10950948009632455,
        "pitch": 0.03378489718887323,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.4643356106738352,
          "pitch": -0.016799851881721395,
          "rotation": 0,
          "target": "54-c-2f-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-c-0202-c2-large-lecture",
      "name": "C-02.02 C2 Large Lecture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.3687829938938023,
        "pitch": 0.08833424253648303,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.0724252501066456,
          "pitch": 0.047286769999445255,
          "rotation": 7.853981633974483,
          "target": "54-c-2f-corridor-2"
        },
        {
          "yaw": 0.630571403892592,
          "pitch": 0.06714862803930721,
          "rotation": 0,
          "target": "57-c-0202-c1-large-lecture"
        },
        {
          "yaw": 2.708016025224506,
          "pitch": 0.04357163951150156,
          "rotation": 0,
          "target": "59-c-2f-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-c-2f-corridor-3",
      "name": "C-2F Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 3.0094310186737356,
        "pitch": 0.06778053591517086,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.2504832287820058,
          "pitch": 0.12215499199088597,
          "rotation": 0,
          "target": "54-c-2f-corridor-2"
        },
        {
          "yaw": -1.7266687878033764,
          "pitch": 0.16283483667441523,
          "rotation": 0,
          "target": "58-c-0202-c2-large-lecture"
        },
        {
          "yaw": 3.0031217205704213,
          "pitch": 0.07374975915872106,
          "rotation": 0,
          "target": "60-c-2f-corridor-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4300585382550484,
          "pitch": 0.033816116768942805,
          "title": "C-02.09 Store room&nbsp;",
          "text": ""
        },
        {
          "yaw": 2.4723347584162223,
          "pitch": 0.01346101979154568,
          "title": "C-02.08 Simulation Control Room&nbsp;",
          "text": "Locked Door&nbsp; - Unable to add this room to the tour."
        },
        {
          "yaw": -2.9956157758289024,
          "pitch": 0.06125789453113484,
          "title": "C-02.03 Store",
          "text": "Locked Door&nbsp; - Unable to add this room to the tour."
        }
      ]
    },
    {
      "id": "60-c-2f-corridor-4",
      "name": "C-2F Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.7551880305243195,
          "pitch": 0.1896131615643064,
          "rotation": 4.71238898038469,
          "target": "63-c-0207-simulation-centre"
        },
        {
          "yaw": -3.1360226142538856,
          "pitch": 0.13473559252485323,
          "rotation": 0,
          "target": "59-c-2f-corridor-3"
        },
        {
          "yaw": 0.03903904094393518,
          "pitch": 0.05139053872155053,
          "rotation": 0,
          "target": "61-c-0205-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4134148148495367,
          "pitch": 0.10465918184860712,
          "title": "C-02.03 Store",
          "text": "Store was was not accessible&nbsp; &nbsp;- unable to add this room to the tour"
        },
        {
          "yaw": 0.42750629573497,
          "pitch": -0.09564829805750996,
          "title": "C-02.04\nC3 Medium Meeting",
          "text": "Meeting was was not accessible&nbsp; &nbsp;- unable to add this room to the tour&nbsp;"
        },
        {
          "yaw": -2.6602682768425527,
          "pitch": 0.03996254992656034,
          "title": "C-02.06 Control Room&nbsp;",
          "text": "Control Room was was not accessible&nbsp; &nbsp;- unable to add this room to the tour"
        }
      ]
    },
    {
      "id": "61-c-0205-lobby",
      "name": "C-02.05 Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.2800115191243293,
        "pitch": 0.1225370853931409,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.2195187258128808,
          "pitch": 0.09008280491989318,
          "rotation": 0,
          "target": "60-c-2f-corridor-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.238787571877441,
          "pitch": 0.07069051630005241,
          "title": "C-02.06 Debrief Room",
          "text": ""
        }
      ]
    },
    {
      "id": "62-c-0250-stair-02",
      "name": "C-02.50 Stair 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.8919553525242243,
          "pitch": 0.03702660919862488,
          "rotation": 0,
          "target": "62-c-0250-stair-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-c-0207-simulation-centre",
      "name": "C-02.07 Simulation Centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.421758935883214,
          "pitch": 0.060145461845053205,
          "rotation": 4.71238898038469,
          "target": "60-c-2f-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-roof-entrance",
      "name": "Roof Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 0.6601897605369764,
        "pitch": 0.31984906654993495,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.7024974934432624,
          "pitch": 0.25049590657922494,
          "rotation": 0,
          "target": "49-c-0252-stair-01-landing"
        },
        {
          "yaw": -1.90150319498761,
          "pitch": 0.10350620822144307,
          "rotation": 0,
          "target": "65-roof-plant-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-roof-plant-",
      "name": "Roof Plant ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7665030221574032,
          "pitch": -0.0040148908755472945,
          "rotation": 0,
          "target": "64-roof-entrance"
        },
        {
          "yaw": 1.438385622321161,
          "pitch": -0.06937845584959668,
          "rotation": 4.71238898038469,
          "target": "68-roof_-high-level-view-"
        },
        {
          "yaw": 0.5295546519952978,
          "pitch": -0.15602000442609665,
          "rotation": 0,
          "target": "66-roof-pv-panels"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-roof-pv-panels",
      "name": "Roof PV Panels",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1933423202878526,
          "pitch": -0.07660963366814144,
          "rotation": 9.42477796076938,
          "target": "68-roof_-high-level-view-"
        },
        {
          "yaw": -0.9300487488053122,
          "pitch": -0.013944413326417049,
          "rotation": 0,
          "target": "67-roof-rear-"
        },
        {
          "yaw": 1.6118034007751367,
          "pitch": -0.1580161166946663,
          "rotation": 3.9269908169872414,
          "target": "64-roof-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-roof-rear-",
      "name": "Roof Rear ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -2.9273332735672,
        "pitch": 0.01053902572053289,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 3.0289336869572,
          "pitch": 0.059865533942703664,
          "rotation": 3.141592653589793,
          "target": "66-roof-pv-panels"
        },
        {
          "yaw": -2.9310872415511646,
          "pitch": -0.11308368848158068,
          "rotation": 9.42477796076938,
          "target": "65-roof-plant-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-roof_-high-level-view-",
      "name": "Roof_ High Level View ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.6715686086867656,
        "pitch": 0.24537289593467904,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.22240623967685558,
          "pitch": 0.018886901120177768,
          "rotation": 3.9269908169872414,
          "target": "67-roof-rear-"
        },
        {
          "yaw": -1.5531656431405079,
          "pitch": 0.19468913338068816,
          "rotation": 0,
          "target": "65-roof-plant-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
