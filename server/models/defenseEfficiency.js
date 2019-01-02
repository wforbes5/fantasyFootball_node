const Sequelize = require('sequelize');
const sequelize = new Sequelize('fantasyfootball', 'python_service', 'password');



const defenseEfficiency = sequelize.define('defenseEfficiency' ,{
    id: Sequelize.STRING,
     RK: Sequelize.INTEGER,
     TEAM: Sequelize.STRING,
     DEFENSE_DVOA:  Sequelize.DOUBLE,
     LASTYEAR: Sequelize.INTEGER,
     WEI_DEFENSE: Sequelize.DOUBLE,
     WEI_DEFENSE_RK: Sequelize.INTEGER,
     PASSDEF: Sequelize.DOUBLE,
     PASSDEF_RK: Sequelize.INTEGER,
     RUSHDEF: Sequelize.DOUBLE,
     RUSHDEF_RK: Sequelize.INTEGER,
     NON_ADJTOTAL: Sequelize.DOUBLE,
     NON_ADJPASS: Sequelize.DOUBLE,
     NON_ADJRUSH:Sequelize.DOUBLE,
     VAR: Sequelize.DOUBLE,
     VAR_RK: Sequelize.INTEGER,
    SCHED: Sequelize.DOUBLE,
    SCHED_RK: Sequelize.INTEGER
    }, {
        schema: 'analytics'
    }
);

module.export.defenseEfficiency = defenseEfficiency;