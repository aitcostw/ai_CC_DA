const HttpConfig = {
	httpEnabled: true,
	showDebug: false,
	botName: 'RaspiPlant11',
	hostUrl: '192.168.1.130',
	aggregateHost: '192.168.1.160',
	hostPort: 8080,
	swimPort: 9001,
	senseHatConfig: {
		bot: {
			enabled: false,
		},
		service: {
			enabled: false,
			polling: {
				enabled: true,
				interval: 100
			}			
		}
	},
	plantConfig: {
		bot: {
			enabled: true,
			updateInterval: {
				enabled: true,
				intervalTimeout: 1000, // in milliseconds
			}
		},
		service: {
			enabled: true,
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

