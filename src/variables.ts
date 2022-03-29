interface Idata {
  navbarLinks: string[],
  filterBlockTabs: string[]

}
export const registeredUserData: Idata = {
  navbarLinks: ['home', 'new article', 'settings', 'username'],
  filterBlockTabs: ['your feed', 'global feed'],
};

export const unregisteredGuestData: Idata = {
  navbarLinks: ['home', 'sign in', 'sign up'],
  filterBlockTabs: ['global feed'],
};

export const tagsList: string[] = ['welcome', 'implementations', 'codebaseShow', 'introduction'];
