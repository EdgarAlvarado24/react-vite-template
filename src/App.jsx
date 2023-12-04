import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Jose Miguel Fernandez',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Javier Lopez',
		active: false,
		role: 'student'
	}
];

const App = () => (
	<UsersList users={USERS}>
		<h1>Listado de Usuarios</h1>
	</UsersList>
);

export default App;
