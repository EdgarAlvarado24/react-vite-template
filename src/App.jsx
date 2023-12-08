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
	},
	{
		name: 'Antonio Campos',
		active: true,
		role: 'teacher'
	}
];

const App = () => <UsersList users={USERS} />;

export default App;
