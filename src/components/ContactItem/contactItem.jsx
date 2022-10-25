

export const ContactItem = ({ name, number }) => (
  <li>
        {name}: {number}
        <button type="button">Delete</button>
  </li>
);
