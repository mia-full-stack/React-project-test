import mongoose from 'mongoose';

// URL для подключения к MongoDB
// Замените на свой URL подключения от MongoDB Atlas или локальной базы данных
const MONGODB_URI = 'mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority';
// или для локальной базы данных: 'mongodb://localhost:27017/database_name'

// Функция для подключения к базе данных
async function connectToDatabase() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Успешное подключение к MongoDB');
    } catch (error) {
        console.error('❌ Ошибка подключения к MongoDB:', error);
        process.exit(1);
    }
}

// Обработка событий подключения
mongoose.connection.on('disconnected', () => {
    console.log('❗ MongoDB отключена');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ Ошибка MongoDB:', err);
});

export default connectToDatabase;