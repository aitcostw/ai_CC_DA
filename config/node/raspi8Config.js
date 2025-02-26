const HttpConfig = {
	httpEnabled: true,
	showDebug: false,
	botName: 'RaspiBot8',
	hostUrl: '192.168.0.208',
	aggregateHost: '192.168.0.210',
	hostPort: 8080,
	swimPort: 9001,
	senseHatConfig: {
		bot: {
			enabled: true,
		},
		service: {
			enabled: true,
			polling: {
				enabled: true,
				interval: 100
			}
		}
	},
	plantConfig: {
		bot: {
			enabled: false,
			updateInterval: {
				enabled: false,
				intervalTimeout: 1000, // in milliseconds
			}
		},
		service: {
			enabled: false,
			arduinoAddress: '/dev/ttyACM0',
			baud: 115200,
			polling: {
				enabled: true,
				interval: 100
			}
		}
	}
}


module.exports = HttpConfig;
