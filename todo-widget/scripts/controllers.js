/**
 * Controllers
 * @module controllers
 */
define(function (require, exports) {

    'use strict';

    /**
     * Main controller
     * @ngInject
     * @constructor
     */
    /*function MainCtrl() {



    }*/

    /**
     * Export Controllers
     */
    //exports.MainCtrl = MainCtrl;
    exports.MainCtrl = function(){
        var ctrl = this;

        ctrl.tasks = [];

        ctrl.addTask = function(dt){
            var tmp = {
                description:dt.description,
                complete:false
            };
            ctrl.tasks.push(tmp);
        };

        ctrl.removeTask = function(indx){
            ctrl.tasks.splice(indx, 1);
        };

        ctrl.completeTask = function(indx){
            ctrl.tasks[indx].complete = (ctrl.tasks[indx].complete)?true:false;
        };

    };
});
