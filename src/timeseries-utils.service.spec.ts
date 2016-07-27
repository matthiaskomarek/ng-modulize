import {TimeSeriesUtils} from "./timeseries-utils.service";

describe("Service: TimeSeriesUtils", () => {
	var timeSeriesUtils: TimeSeriesUtils;
	beforeEach(() => {
		timeSeriesUtils = new TimeSeriesUtils();
	});
	describe('API spec', () => {

		it('should match API service spec', () => {

			//noinspection TsLint
			describe('API spec', () => {

				it('should match API spec', () => {

					var definedSpec = {
						'getResolution': 'function'
					};

					var foundSpec = {};

					for (var ele in TimeSeriesUtils) {
						if (TimeSeriesUtils.hasOwnProperty(ele)) {
							foundSpec[ele] = typeof TimeSeriesUtils[ele];
						}
					}

					expect(foundSpec).toEqual(definedSpec);

				});

			});
		});
	});
});
