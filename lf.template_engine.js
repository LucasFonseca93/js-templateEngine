/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Object that defines how the component will work.
 * @type {{
 *      prefix: string,
 *      init: _templateEngine.init
 * }}
 */
var _templateEngine = {

    prefix: '{{%s}}', // Defines the default prefix for template keys

    /**
     * Function that initializes the component.
     * It is responsible for defining the prefix to be used and the functions that will be exposed by the component.
     * @param data
     */
    init: function (data) {

        (data && data.prefix) ? this.prefix = data.prefix : void(0); // If a prefix is not entered, the default is maintained.

        /**
         * Function responsible for processing a template from a bind json.
         * This function returns a string resulting from processing.
         * @param _template - string
         * @param _bind     - object
         * @return string
         */
        this.format = function (_template, _bind) {
            var keys = Object.keys(_bind),
                length = keys.length;

            for(var k=0; k<length; k++) {
                // Replaces all keys with their respective values
                _template = _template.split(this.prefix.replace('%s', keys[k])).join(_bind[keys[k]]);
            }
            return _template
        };

        /**
         * Function responsible for generating a sun element with the contents defined by the processing of a template and a bind json.
         * It will return the requested element regardless of the tag used. This way you can create custom tags.
         * @param _tagName   - string
         * @param _template  - string
         * @param _bind      - object
         * @return {Element}
         */
        this.generate = function (_tagName, _template, _bind) {
            var domElement = document.createElement(_tagName || 'custom');
            domElement.innerHTML = this.format(_template, _bind); // Defines the content of the element from the template and bind json.
            return domElement;
        }
    }

};

