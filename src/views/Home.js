import React, { useState } from 'react';
import styled from 'styled-components';

import { GET_LATEST_EVENTS, GET_LATEST_DISPUTES } from 'utils/queries';
import CurrentMiningEvent from 'components/mining-events/CurrentMiningEvent';
import RecentMingingEvents from 'components/mining-events/RecentMiningEvents';
import GraphFetch from 'components/shared/GraphFetch';
import RecentDisputes from 'components/disputes/RecentDisputes';

const StyledContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 50px;
`;

const Home = () => {
  const [events, setEvents] = useState();
  const [disputes, setDisputes] = useState();

  return (
    <StyledContainer>
      <GraphFetch query={GET_LATEST_EVENTS} setRecords={setEvents} />
      <GraphFetch
        query={GET_LATEST_DISPUTES}
        setRecords={setDisputes}
        suppressLoading={true}
      />
      {events ? (
        <>
          <CurrentMiningEvent event={events[0]} />
          <RecentMingingEvents events={events} />
        </>
      ) : null}
      {disputes ? <RecentDisputes disputes={disputes} /> : null}
    </StyledContainer>
  );
};

export default Home;
