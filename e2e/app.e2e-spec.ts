import { PostCommentPage } from './app.po';

describe('post-comment App', function() {
  let page: PostCommentPage;

  beforeEach(() => {
    page = new PostCommentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
