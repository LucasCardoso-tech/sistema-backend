
const express = require('express');
const app = express();
const routes = require('./routes');
const { corsOptions, limiter } = require('./middlewares');
const logger = require('./config/logs');

app.use(require('cors')(corsOptions));
app.use(limiter);
app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Servidor rodando na porta ${PORT}`);
});
