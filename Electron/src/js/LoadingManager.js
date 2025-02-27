/**
 * @author mrdoob / http://mrdoob.com/
 */

function LoadingManager( onLoad, onProgress, onError ) {

	var scope = this;

	var isLoading = false;
	var itemsLoaded = 0;
	var itemsTotal = 0;
	var urlModifier = undefined;
	var handlers = [];

	// Refer to #5689 for the reason why we don't set .onStart
	// in the constructor

	this.onStart = undefined;
	this.onLoad = onLoad;
	this.onProgress = onProgress;
	this.onError = onError;

	this.itemStart = function ( url ) {

		itemsTotal ++;

		if ( isLoading === false ) {

			if ( scope.onStart !== undefined ) {

				scope.onStart( url, itemsLoaded, itemsTotal );

			}

		}

		isLoading = true;

	};

	this.itemEnd = function ( url ) {

		itemsLoaded ++;

		if ( scope.onProgress !== undefined ) {

			scope.onProgress( url, itemsLoaded, itemsTotal );

		}

		if ( itemsLoaded === itemsTotal ) {

			isLoading = false;

			if ( scope.onLoad !== undefined ) {

				scope.onLoad();

			}

		}

	};

	this.itemError = function ( url ) {

		if ( scope.onError !== undefined ) {

			scope.onError( url );

		}

	};

	this.resolveURL = function ( url ) {

		if ( urlModifier ) {

			return urlModifier( url );

		}

		return url;

	};

	this.setURLModifier = function ( transform ) {

		urlModifier = transform;

		return this;

	};

	this.addHandler = function ( regex, loader ) {

		handlers.push( regex, loader );

		return this;

	};

	this.removeHandler = function ( regex ) {

		var index = handlers.indexOf( regex );

		if ( index !== - 1 ) {

			handlers.splice( index, 2 );

		}

		return this;

	};

	this.getHandler = function ( file ) {

		for ( var i = 0, l = handlers.length; i < l; i += 2 ) {

			var regex = handlers[ i ];
			var loader = handlers[ i + 1 ];

			if ( regex.global ) regex.lastIndex = 0; // see #17920

			if ( regex.test( file ) ) {

				return loader;

			}

		}

		return null;

	};

}

var DefaultLoadingManager = new LoadingManager();
