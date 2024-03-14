export const participantActionTypes = {
  INCREMENT_PARTICIPANT: 'PARTICIPANTS/INCREMENT_PARTICIPANT',
  ADD_PARTICIPANT: 'PARTICIPANTS/ADD_PARTICIPANT',
  DROP_PARTICIPANT: 'PARTICIPANTS/DROP_PARTICIPANT',
}

export const incrementParticipants = () => {
  return {
    type: participantActionTypes.INCREMENT_PARTICIPANT
  }
}

export const addParticipant = (data) => {
  return {
    type: participantActionTypes.ADD_PARTICIPANT,
    payload: data
  }
}

export const removeParticipant = (id) => {
  return { type: participantActionTypes.DROP_PARTICIPANT,
  payload: id, }
}