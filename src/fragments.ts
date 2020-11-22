export const CLEANING_FRAGMENT = `
  fragment CleaningParts on Cleaning {
    id
    title
    imageUrl
    companies {
      id
      name
      imageUrl
      subTitle
      latitude
      longitude
      phoneNumber
    }
    createdAt
    updatedAt
  }    
`;
