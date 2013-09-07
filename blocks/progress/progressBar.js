/*global jQuery*/

(function ($) {
    'use strict';

    var ProgressBar = function (element) {
        this._$progressBar = $(element);
        this._$progress = $("<span class='progress-bar__progress'></span>");
        this._value = 0;
        this.init();
    };

    ProgressBar.prototype.init = function () {
        this._$progress.css('display', 'none');
        this._$progressBar.addClass("progress-bar");
        this._$progressBar.children().remove();
        this._$progressBar.append(this._$progress);
        this._$progressBar.attr('data-value', '0%');
    };

    ProgressBar.prototype.value = function () {
        var newValue = null;
        // get value with empty args
        if (arguments.length < 1) {
            return this._value;
        }

        newValue = parseInt(arguments[0], 10);

        if (!newValue) return null;
        if (!isFinite(newValue))return null;
        if (newValue < 0) newValue = 0;
        if (newValue > 100) newValue = 100;
        if (newValue !== 0 && this._$progress.css('display') === 'none') this._$progress.show();

        this._value = newValue;
        newValue = newValue + "%";

        this._$progressBar.attr('data-value', newValue);
        this._$progress.css('width', newValue);

        return this._value;
    };

    window.ProgressBar = ProgressBar;

})(jQuery);
