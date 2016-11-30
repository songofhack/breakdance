'use strict';

var isEqual = require('./support/is-equal');

describe('breaks', function() {
  it('should convert a break to markdown', function() {
    isEqual.inline('<br>', '<br>\n');
  });

  it('should convert multiple breaks to markdown', function() {
    var fixture = [
      '<br> foo <br>bar<br> baz',
      '',
      '',
      '',
      '',
      '<br>',
    ].join('\n');

    isEqual.inline(fixture, [
      '<br>',
      '',
      'foo',
      '',
      '<br>',
      '',
      'bar',
      '',
      '<br>',
      '',
      'baz',
      '',
      '<br>\n',
    ].join('\n'));
  });
});
