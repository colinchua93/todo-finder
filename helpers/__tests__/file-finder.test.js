const mock = require('mock-fs')
const fileFinder = require('../file-finder');

beforeEach(() => {
    mock({
        'path/to/fake/dir': {
          'some-file.js': 'file content here',
          'not-empty-dir': {
              'some-file1.js': 'file content here'
          }
        }
    });
})

afterEach(mock.restore);

describe('fileFinder', () => {
    it('will receive 2 files if total files in the folder is two', () => {
        const fileSummary = fileFinder('path/to');

        expect(fileSummary.length).toBe(2);
        expect(fileSummary).toMatchObject(["path/to/fake/dir/not-empty-dir/some-file1.js", "path/to/fake/dir/some-file.js"])
      });
})