// Define actions name.
export const ADD_BOOKMARK = 'bookmarks/add';
export const LOAD_BOOKMARKS = 'bookmarks/load';
export const REMOVE_BOOKMARK = 'bookmarks/remove';
export const UPDATE_BOOKMARK = 'bookmarks/update';

// Create action creations...
// Payloads of information that send data from your application to your store.
export function loadBookmarks() {
  return ({
    type: LOAD_BOOKMARKS,
    payload: [
      {
        id: 1,
        title: 'Testing 1',
        url: 'http://test.com',
        category: {
          id: 1,
          name: 'Games'
        },
      },
    ]
  });
};
export function addBookmark(bookmark) {
  return ({
    type: ADD_BOOKMARK,
    payload: bookmark
  });
};
export function removeBookmark(bookmark) {
  return ({
    type: REMOVE_BOOKMARK,
    payload: bookmark
  });
};
export function updateBookmark(bookmark) {
  return ({
    type: UPDATE_BOOKMARK,
    payload: bookmark
  });
};
