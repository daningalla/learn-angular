import { AngularRecipeAppPage } from './app.po';

describe('angular-recipe-app App', () => {
  let page: AngularRecipeAppPage;

  beforeEach(() => {
    page = new AngularRecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
