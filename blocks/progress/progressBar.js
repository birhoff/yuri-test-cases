/*global jQuery*/

(function ($) {
    'use strict';

    var ProgressBar = function (element, settings) {
        this._settings = $.extend({}, ProgressBar.defaults, settings);
        this._$progressBar = $(element);
        this._$indicator = $("<span class='progress-bar__indicator'></span>");
        this._$label = $("<span class='progress-bar__label'></span>");
        this._value = 0;

        this.init();
    };

    ProgressBar.prototype.init = function () {
        this._$progressBar.css("width", this._settings.width);
        this._$progressBar.addClass("progress-bar");
        this._$progressBar.children().remove();
        this._$progressBar.append(this._$indicator);
        this._$progressBar.append(this._$label);
        this._$label.text(this._value + "%");
    };

    ProgressBar.prototype.value = function () {
        var newValue = parseInt(arguments[0], 10),
            aspect = this._$progressBar.width() / 100;

        // get value with empty args
        if (arguments.length < 1) {
            return this._value;
        }

        if (!newValue) return null;
        if (!isFinite(newValue))return null;

        if (newValue < 0) newValue = 0;
        if (newValue > 100) newValue = 100;

        if (newValue > 0 && !this._$indicator.hasClass("active")) {
            this._$indicator.addClass("active");
        }

        this._$label.text(newValue + "%");
        this._$indicator.css('width', newValue * aspect);
        this._value = newValue;
        return newValue;
    };

    ProgressBar.defaults = {
        width: "100px"
    };

    window.ProgressBar = ProgressBar;

})(jQuery);
