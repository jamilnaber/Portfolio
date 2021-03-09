import githubLogo from '../../Assets/github-logo.svg'
import andriod from '../../Assets/appPicture.png'
import baccarat from '../../Assets/Baccarat_1.png'

const data_projects = [
    {
        name: 'Clip Service Player',
        image: andriod,
        deployed_url: 'https://github.com/jamilnaber/ClipServicePlayer',
        github_url: 'https://github.com/jamilnaber/ClipServicePlayer',
        category: ['Android', 'Java']
    },

    {
        name: 'TicTacToe',
        image: githubLogo,
        deployed_url: 'https://github.com/jamilnaber/TicTacToe',
        github_url: 'https://github.com/jamilnaber/TicTacToe',
        category: ['Java', 'Java FX', 'Maven' ,'Sockets']
    },

    {
        name: 'Baccarat',
        image: baccarat,
        deployed_url: 'https://github.com/jamilnaber/Baccarat',
        github_url: 'https://github.com/jamilnaber/Baccarat',
        category: ['Java', 'Java FX', 'Maven']
    },

    {
        name: 'Portfolio Website',
        image: githubLogo,
        deployed_url: 'https://jamilnaber.netlify.app/',
        github_url: 'https://github.com/jamilnaber/Portfolio',
        category: ['React']
    }
]

export default data_projects;