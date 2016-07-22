import * as angular from 'angular'
import * as moment from 'moment'
import {TimeSeriesUtils} from './timeseries-utils.service';

angular.module('moment', [])
	.constant('moment', moment);

// Element Request Provider
angular.module('TimeSeriesUtils', [
	'moment'
])
	.service('TimeSeriesUtils', TimeSeriesUtils);