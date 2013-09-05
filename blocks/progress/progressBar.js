/*global jQuery*/

(function ($) {
    'use strict';

    var ProgressBar = function (element, settings) {
        this._settings = $.extend({}, ProgressBar.defaults, settings);
        this._$progressBar = $(element);
        this._value = 0;

        this.init();
    };

    ProgressBar.prototype.init = function () {
        this._$progressBar.css("width", this._settings.width);
        this._$progressBar.addClass("progress-bar");
        this._$progressBar.children().remove();
        this._$progressBar.text("0%");
    };

    ProgressBar.prototype.value = function () {
        var newValue = parseInt(arguments[0], 10);

        // get value with empty args
        if (arguments.length < 1) {
            return this._value;
        }

        if (!newValue) return null;
        if (!isFinite(newValue))return null;

        if (newValue < 0) newValue = 0;
        if (newValue > 100) newValue = 100;

        this._$progressBar.text(newValue + "%");
        this._$progressBar.css('background-size', newValue + "% 100%");
        this._value = newValue;
        return newValue;
    };

    ProgressBar.defaults = {
        width: "100%"
    };

    window.ProgressBar = ProgressBar;

})(jQuery);
