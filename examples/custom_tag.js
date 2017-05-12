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
 * Example of generating dom elements from the component.
 * In this example a custom tag will be generated and the result of processing the template from the bind will be defined as content.
 */

_templateEngine.init(); // init the component

/**
 * Template.
 * Attributes: {
 *      name   : 'to be defined in bind'
 *      appName: 'to be defined in bind'
 * }
 * @type {string}
 */
var template = `
    <h1>Hello {{name}}</h1>
    <h2>Welcome to {{appName}}</h2>
`;

/**
 * Result of the formatting process.
 * @type {string}
 */
var customTag = _templateEngine.generate('welcome-message', template, {
    name   : 'Lucas Fonseca',
    appName: 'Template Engine'
});

document.body.appendChild(customTag);
