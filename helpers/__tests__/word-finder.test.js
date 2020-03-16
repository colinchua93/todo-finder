const mock = require('mock-fs')
const wordFinder = require('../word-finder');

beforeEach(() => {
    mock({
        'path/to/fake/dir': {
          'some-file.js': 'file content here Hello',
          'not-empty-dir': {
              'some-file1.js': 'file content here'
          }
        }
    });
})

afterEach(mock.restore);

describe('wordFinder', () => {
    it('should return only files with certain words on it', () => {
        const fileList = ["path/to/fake/dir/not-empty-dir/some-file1.js", "path/to/fake/dir/some-file.js"]
        const results = wordFinder(fileList, 'Hello');

        expect(results).toMatchObject(["path/to/fake/dir/some-file.js"])
      });
})