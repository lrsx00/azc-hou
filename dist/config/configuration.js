"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
    database: {
        host: process.env.DB_HOST ?? 'localhost',
        port: parseInt(process.env.DB_PORT ?? '5432', 10),
        username: process.env.DB_USERNAME ?? 'azc',
        password: process.env.DB_PASSWORD ?? 'Sj04013606',
        name: process.env.DB_DATABASE ?? 'azc',
    },
    jwt: {
        secret: process.env.JWT_SECRET ?? 'default_jwt_secret',
        expiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
    },
});
//# sourceMappingURL=configuration.js.map