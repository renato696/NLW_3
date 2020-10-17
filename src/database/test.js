const Database = require('./db');

Database.then(async db => {
    //inserir dados na tabela
    /await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.2219689",
            "-49.639186",
            "Lar das Meninas",
            "Presta assistencia a crianças meninas",
            "1234567",
            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência",
            "Horário de visitas Das 18h até 8h",
            "1"
        );
    `)

    //consultar dados da tabela
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="1"')
    console.log(orphanage)
})