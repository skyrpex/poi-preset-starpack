const ManifestPlugin = require('@skyrpex/manifest-webpack-plugin');

module.exports = () => (poi) => {
	poi.extendWebpack((config) => {
		config.plugin('constants').tap(([env]) => {
			const newEnv = Object.assign(env, {
				'process.env': {
					POI_MODE: JSON.stringify(poi.options.mode),
				},
			});
			return [newEnv];
		});

		config.plugin('manifest').use(ManifestPlugin);
	});
};
