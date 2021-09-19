// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
	firebase: {
		apiKey: "AIzaSyC7rj1wYXAmiNYxW313-nymW-L94mWZgzg",

		authDomain: "spring-wei-1559495273224.firebaseapp.com",

		databaseURL: "https://spring-wei-1559495273224.firebaseio.com",

		projectId: "spring-wei-1559495273224",

		storageBucket: "spring-wei-1559495273224.appspot.com",

		messagingSenderId: "487887329207",

		appId: "1:487887329207:web:337c5e0688d74d04"

	},
	API: {
		notificationAuth: 'AAAAcZhZ17c:APA91bHNBaQi6PI_C6zuKf9ZL9aLaPk2ic9JzxkpVFUmbhXH6y0ueV4k4AJViPBKeVZHrcnPoOyS8nniFI3wHajGu1yLPcGMrCSfTDvWkrqivUp7jVklNyXjG87gz4uMBi8FoLPE59OG', // Insérer la clé API de FCM
		url: 'https://spring-wei-1559495273224.firebaseio.com' // Insérer l'URL vers l'API de l'appli
	},
	links: {
		dashboard: 'https://wei.insa-cvl.org/dashboard', // Insérer l'URL vers le tableau de bord
		website: '', // Insérer l'URL vers le site du WEI
		campus: 'https://campus.insa-cvl.org'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
