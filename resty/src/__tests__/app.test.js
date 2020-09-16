import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import Results from '../components/Results'



it('should render Star Wars list', async () => {

    const people = {
      "Luke Skywalker": "http://swapi.dev/api/people/1/",
      "Darth Vader": "http://swapi.dev/api/people/4/",
    }
    render (<Results loading={false} results={people} count={82} />);
  
    // Uncomment below and check your terminal for coolness
    screen.debug();
  
    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('Count: 82');
    
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Luke Skywalker');
    expect(items[0]).toContainHTML('<a href="http://swapi.dev/api/people/1/">');
    expect(items[1]).toHaveTextContent('Darth Vader');
    expect(items[1]).toContainHTML('<a href="http://swapi.dev/api/people/4/">');
});