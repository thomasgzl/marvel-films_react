import withLoading from './utils/withLoading';
import Card from './Card';

const ListCards = ({ listData }) => {
  return (
    <ul>
      {listData.map((elem) => {
        return (
          <li key={elem.id}>
            <Card
              characId={elem.id}
              name={elem.name}
              image={elem.image}
              description={elem.description}
              series={elem.series}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default withLoading(ListCards);
