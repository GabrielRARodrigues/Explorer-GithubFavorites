export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'GabrielRARodrigues',
        name: 'Gabriel Rodrigues',
        public_repos: '63',
        followers: '1'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '76',
        followers: '120000'
      }
    ]
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      entry => entry.login !== user.login
    )
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.revomeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar essa linha ?')

        if (isOK) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `          
      <td class="user">
        <img
          src="https://github.com/GabrielRARodrigues.png"
          alt="Imagem de Gabriel Rodrigues"
        />
        <a href="https://github.com/GabrielRARodrigues">
          <p>Gabriel Rodrigues</p>
          <span>GabrielRARodrigues</span>
        </a>
      </td>
      <td class="repositories">62</td>
      <td class="followers">1</td>
      <td><button class="remove">&times;</button></td>`

    return tr
  }

  revomeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
