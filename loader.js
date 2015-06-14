//THIS IS A JQUERY EXTENTION

(function ($) {

    function Loader(target_container) {
        this._container = $("<div class='loader-container'/>");
        this._target_container = target_container;
        this._loader = $("<div class='general-preloader'/>");
        this._container.append(this._loader);
        this._loader = null;
    }

    Loader.prototype.add = function() {
        this._target_container.append(this._container);
        this._loader = true;
    };

    Loader.prototype.remove = function() {
        this._container.remove();
        this._target_container.removeData('loader');
        this._loader = false;
    };

    $.fn.loader = function() {
        var $this = $(this),
            loader = $this.data('loader') || $this.data('loader', new Loader($this)).data('loader');
        if (!loader._loader) {
            loader.add();
        } else {
            loader.remove();
        }

        return $this;
    };

})(jQuery);
