import {TimeSeriesUtils} from "./timeseries-utils.service";

describe("Service: TweetService", () => {
	var timeSeriesUtils: TimeSeriesUtils;
	beforeEach(() => {
		timeSeriesUtils = new TimeSeriesUtils();
	});
	describe("start", () => {
		it("should test", () => {
			expect(timeSeriesUtils.getResolution).toBe(true);
		});
	});
});