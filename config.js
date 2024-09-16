const { Sequelize } = require("sequelize");
require("dotenv").config();
const toBool = x => (x && x.toLowerCase() === "true") || false;
const DATABASE_URL = process.env.DATABASE_URL || "./database.db";
module.exports = {
	SESSION_ID: (process.env.SESSION_ID || "Session~nzCcSTgN").trim(),
	BOT_INFO: process.env.BOT_NAME || "Astro;FxBot",
	SUDO: process.env.SUDO || "27613106647",
	HANDLERS: process.env.HANDLER === "true" || process.env.HANDLER === "." ? "^" : ".",
	WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
	GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you,Bye",
	ANTILINK: process.env.ANTILINK || true,
	// AUTO_SAVE_STATUS: toBool(process.env.STATUS_SAVER) || false,
	AUTO_READ: toBool(process.env.AUTO_READ) || false,
	AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || false,
	STICKER_PACK: process.env.AUTHOR || "Foreigner;FXBOTTO",
	LOGS: toBool(process.env.LOGS) || true,
	WORK_TYPE: process.env.WORK_TYPE || "public",
	DATABASE_URL: DATABASE_URL,
	DATABASE:
		DATABASE_URL === "./database.db"
			? new Sequelize({
					dialect: "sqlite",
					storage: DATABASE_URL,
					logging: false,
			  })
			: new Sequelize(DATABASE_URL, {
					dialect: "postgres",
					ssl: true,
					protocol: "postgres",
					dialectOptions: {
						native: true,
						ssl: { require: true, rejectUnauthorized: false },
					},
					logging: false,
			  }),
	BRANCH: "master",
	WARN_COUNT: 3,
	RMBG_API_KEY: process.env.RMBG_API_KEY || "",
	DELETED_LOG: toBool(process.env.DELETED_LOG) || true,
	DELETED_LOG_CHAT: toBool(process.env.DELETED_LOG_CHAT) || true,
	TIME_ZONE: process.env.TZ,
	VERSION: require("./package.json").version,
};
