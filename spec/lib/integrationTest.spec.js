const { spawn } = require('child_process');
const { readFile, readdirSync, statSync } = require('fs');

beforeEach(function() {
  jasmine.addMatchers(
    require('jasmine-diff')(jasmine, {
      colors: true,
      inline: true
    })
  );
});

describe('Compare results', () => {
  it('Run jsonschema2md on example schemas', done => {
    const ls = spawn('node', [
      'cli.js',
      '-d',
      'examples/schemas',
      '-o',
      'examples/docs',
      '-x',
      'examples/generated-schemas',
      '-m',
      'template=reference',
      '-m',
      'foo=bar',
      '--link-abstract',
      'abstract.md',
      '--link-status',
      'status.md'
    ]);

    ls.on('close', code => {
      expect(code).toEqual(0);

      const files = readdirSync('./spec/examples');

      files.forEach(file => {
        if (statSync('./spec/examples/' + file).isFile()) {
          it('Comparing ' + file, indone => {
            console.log('file ' + file);
            readFile('./spec/examples/' + file, (err, expectedbuf) => {
              expect(err).toBeNull();
              readFile('./examples/docs/' + file, (err, actualbuf) => {
                expect(err).toBeNull();
                expect(actualbuf.toString()).toEqual(expectedbuf.toString());
                indone();
              });
            });
          });
        }
      });
      done();
    });
  });

  it('Run jsonschema2md for custom file extension', done => {
    const ls = spawn('node', [
      'cli.js',
      '-d',
      'examples/schemas',
      '-o',
      'examples/docs',
      '-x',
      'examples/generated-schemas',
      '-e',
      'js'
    ]);

    ls.on('close', code => {
      expect(code).toEqual(0);
      done();
    });
  });
});
