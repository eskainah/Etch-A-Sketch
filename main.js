function createGrid(rows, columns) {
    const content = document.getElementById('content');
  
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('div');
      row.className = 'grid-row';
  
      for (let j = 0; j < columns; j++) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        row.appendChild(item);
      }
  
      container.appendChild(row);
    }
  }
  createGrid(16, 16);