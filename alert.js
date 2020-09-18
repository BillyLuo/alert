// AMD with global, Node, or global
;
(function(root, factory) { // eslint-disable-line no-extra-semi
	if(typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(function() {
			// Also create a global in case some scripts
			// that are loaded still are looking for
			// a global even when an AMD loader is in use.
			return(root.Alert = factory());
		});
	} else if(typeof exports === 'object' && typeof module === 'object'){
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like enviroments that support module.exports,
		// like Node.
		module.exports = factory();
	} else if(typeof exports === 'object') {
    exports['Alert'] = factory();
  } else {
		// Browser globals (root is self)
    if(typeof window == 'object') {
    	root = window
    }
		root.Alert = factory();
	}
}(this, function() {
  var types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info','error', 'light', 'dark']
  var Alert = {
    alert: function (option) {
      var defaultOption = {
        duration: 3000
      }
      if (!/^[1-9]\d*$/.test(option.duration)) {
        option.duration = 3000
      }
      if (typeof option == 'string') {
        option = {
          content: option
        }
      }
      option = Object.assign(defaultOption, option)
      option.removeDuration = option.duration + 1000
      if (types.indexOf(option.type) == '-1') {
        option.type = types[0]
      }
      if (option.type == 'error') {
        option.type == 'danger'
      }
      var wrapper = document.createElement('div')
      wrapper.className = 'alert-wrapper'
      var content = document.createElement('div')
      var typeClass = 'alert'
      option.type = option.type ? option.type : 'primary'
      typeClass += ' alert-' + option.type
      if (!option.content) return
      var alerts = document.querySelectorAll('.alert-wrapper')
      alerts.forEach(item => {
        if (item) {
          document.body.removeChild(item)
        }
      })
      content.className = typeClass
      content.innerHTML = option.content
      wrapper.appendChild(content)
      document.body.appendChild(wrapper)
      setTimeout(() => {
        wrapper.className = wrapper.className + ' alert-out'
      }, option.duration);
      setTimeout(() => {
        if (wrapper) {
          try{
            document.body.removeChild(wrapper)
          }catch(err) {
            
          }
        }
      }, option.removeDuration);
    }
  }
  types.forEach(item => {
    Alert[item] = function (content, duration) {
      Alert.alert({
        type: item,
        content: content,
        duration: duration
      })
    }
  })
  return Alert
}))