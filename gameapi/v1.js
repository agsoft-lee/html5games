(function(d, params, env, apiHost, hosts) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();
	console.log(d.location.href)
	console.log(params);
	params["fg_aid"] = "A1000-10A0A";
	params["fg_beat"] = "415";
	params["fg_domain"] = "www.local";
	params["fg_pid"] = "30e454d1-6b3e-491b-823b-09cd0cdb27ab";
	params["fg_uid"] = "abe80572-560a-444d-baf7-2fa4a7b2c02f";
	params["original_ref"] = "3";
	var mhref = "/html5games/o/om-nom-run/v1240/?fg_domain=www.local&fg_aid=A1000-10A0A&fg_uid=abe80572-560a-444d-baf7-2fa4a7b2c02f&fg_pid=30e454d1-6b3e-491b-823b-09cd0cdb27ab&fg_beat=415&original_ref=";

	if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
		// famobi api already loaded
		return false;
	}


	if (params.fg_domain && params.fg_uid && params.fg_pid) {
		env = params.fg_env || 'prod';
		apiHost = hosts[env];
		// load script
		(function (d, url, fgJS, firstJS) {
			fgJS = d.createElement('script');
			firstJS = d.getElementsByTagName('script')[0];
			// fgJS.src = url+"?_location="+encodeURIComponent(d.location.href.split('#')[0]);
			fgJS.src = url+"?_location="+encodeURIComponent(mhref.split('#')[0]);
			firstJS.parentNode.insertBefore(fgJS, firstJS);
		})(d, '/html5games/gameapi/script/')
		// })(d, d.location.protocol + '//' + apiHost + '.famobi.com/gameapi/script/' + params.fg_uid + '/' + params.fg_pid);
	}
})(document, {}, '', '', {
	'dev': 'api.dev', 
	'staging': 'api.staging.gc',
	'staging.aws': 'api.staging.aws',
	'staging.gc': 'api.staging.gc',
	'prod': 'api'
});