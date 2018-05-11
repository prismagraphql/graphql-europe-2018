import styled from 'styled-components'

import ScheduleRow from 'components/ScheduleRow'
import SectionTitle from 'components/SectionTitle'
import Container from 'components/Container'

const styles = {
  keynote: {
    bg: 'rgb(254,238,244)',
    color: 'rgb(217,66,117)',
  },
  break: {
    bg: 'rgb(242, 242, 242)',
    color: 'rgb(80,90,105)',
  },
  lightning: {
    bg: 'rgb(253, 243, 231)',
    color: 'rgb(242,141,34)',
  },
  regular: {
    bg: 'rgb(240, 236, 254)',
    color: 'rgb(64,47,157)',
  },
}

const scheduleList = [
  {
    title: 'Registration & Breakfast',
    description: `Don't be late!`,
    images: [
      {
        src: '/static/schedule/coffee.svg',
        icon: true,
      },
    ],
    time: '08:30 - 09:30',
    ...styles.break,
  },
  {
    title: 'Welcome speech',
    description: 'Lee Byron',
    images: [
      {
        src: '/static/schedule/coffee.svg',
        icon: true,
      },
    ],
    time: '10:30 - 11:00',
    ...styles.break,
  },
  {
    title: 'Building a GraphQL API Over Your Existing Backends',
    description: 'Martijn Walraven',
    images: [
      {
        src: [
          '/static/speakers/speakers-4.jpg',
          '/static/speakers/speakers-4@2x.jpg',
        ],
      },
    ],
    time: '11:30 - 12:00',
    ...styles.regular,
  },
  {
    title: 'Lunch',
    description: 'ss',
    images: [
      {
        src: '/static/schedule/cutlery.svg',
        icon: true,
      },
    ],
    time: '12:00 - 13:00',
    ...styles.break,
  },
]

export default () => (
  <Wrapper>
    <Container>
      <SectionTitle>Schedule</SectionTitle>
      <List>
        {scheduleList.map((row, i) => <ScheduleRow key={i} {...row} />)}
      </List>
    </Container>
  </Wrapper>
)

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 100px;
`

const List = styled.div`
  padding-top: 30px;
`