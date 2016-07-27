'use strict';

import * as angular from 'angular'
import * as moment from 'moment'


export class TimeSeriesUtils {
	getResolution(resolutions:Array<any>, from:number, to:number, maxNumberEntries:number) {
		var timeSpan = to - from;
		timeSpan = timeSpan < 0 ? timeSpan * -1 : timeSpan;

		var resolution = resolutions[resolutions.length - 1];

		angular.forEach(resolutions, function(res) {
			if (angular.isDefined(res.VALUE) && timeSpan / res.VALUE < maxNumberEntries) {
				resolution = res;
			}
		});
		return resolution;
	}
}
