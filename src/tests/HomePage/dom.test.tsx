import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import HomePage from '../../pages/HomePage';
import FilterBlock from '../../components/FilterBlock';

describe('HomePage', () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  test('shows Banner', () => {
    expect(screen.getByTestId('banner')).toBeInTheDocument();
  });
  test('shows FilterBlock', () => {
    expect(screen.getByTestId('filter-block')).toBeInTheDocument();
  });
});

describe('Banner', () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  test('shows logo', () => {
    expect(screen.getByTitle('Conduit logo')).toBeInTheDocument();
  });
  test('shows moto', () => {
    expect(screen.getByTestId('conduit-moto')).toBeInTheDocument();
  });
});

describe('FilterBlock', () => {
  const articlesData = [
    {
      author: {
        username: 'Gerome',
        bio: '',
        image: 'https://api.realworld.io/images/demo-avatar.png',
        following: false,
      },
      body: 'Share your knowledge and enpower the community by creating a new implementation',
      createdAt: '2021-11-24T12:11:08.212Z',
      description: 'join the community by creating a new implementation',
      favorited: false,
      favoritesCount: 1730,
      slug: 'Create-a-new-implementation-1',
      tagList: ['implementations'],
      title: 'Create a new implementation',
      updatedAt: '2021-11-24T12:11:08.212Z',
    },
    {
      author: {
        username: 'Gerome',
        bio: '',
        image: 'https://api.realworld.io/images/demo-avatar.png',
        following: false,
      },
      body: 'Over 100 implementations have been created using various languages, libraries, and frameworks.\n\nExplore them on CodebaseShow.',
      createdAt: '2021-11-24T12:11:07.952Z',
      description:
        'discover the implementations created by the RealWorld community',
      favorited: false,
      favoritesCount: 1076,
      slug: 'Explore-implementations-1',
      tagList: ['codebaseShow', 'implementations'],
      title: 'Explore implementations',
      updatedAt: '2021-11-24T12:11:07.952Z',
    },
    {
      author: {
        username: 'Gerome',
        bio: '',
        image: 'https://api.realworld.io/images/demo-avatar.png',
        following: false,
      },
      body: 'See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spec',
      createdAt: '2021-11-24T12:11:07.557Z',
      description:
        'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      favorited: false,
      favoritesCount: 736,
      slug: 'Welcome-to-RealWorld-project-1',
      tagList: ['welcome', 'introduction'],
      title: 'Welcome to RealWorld project',
      updatedAt: '2021-11-24T12:11:07.557Z',
    },
  ];
  beforeEach(() => {
    render(<FilterBlock articlesList={articlesData} />);
  });

  test('shows TagBar', () => {
    expect(screen.getByTestId('tagbar')).toBeInTheDocument();
  });
  test('shows FilterBlockItemList', () => {
    expect(screen.getByTestId('filter-block-item-list')).toBeInTheDocument();
  });
  test('shows FilterTabs', () => {
    expect(screen.getByTestId('filter-tabs')).toBeInTheDocument();
  });

  test('shows Preloader', () => {
    render(<FilterBlock articlesList={[]} />);
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });
});
