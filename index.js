const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:8080' 
}));
app.use(express.json());


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);





  
  if (!titulo || !descricao || !carga_horaria) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const { data, error } = await supabase
      .from("cursos")
      .insert([{ titulo, descricao, carga_horaria }])
      .select(); 

    if (error || !data || data.length === 0) {
      return res.status(500).json({ error: error?.message || "Erro ao inserir curso" });
    }

    res.status(201).json(data[0]);
  } catch (err) {
    console.error("Erro inesperado:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }








const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
