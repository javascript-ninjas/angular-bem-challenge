import { AngularBemChallengePage } from './app.po';

describe('angular-bem-challenge App', () => {
    let page: AngularBemChallengePage;

    beforeEach(() => {
        page = new AngularBemChallengePage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
