import React, { useState } from 'react';
// Componentes do React Bootstrap
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/productForm.scss'; // Importa seu arquivo SCSS

export default function ProductForm() {
  const [productName, setProductName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [description, setDescription] = useState('');
  const [supplierLink, setSupplierLink] = useState('');
  const [images, setImages] = useState([]);

  // Lida com o upload de imagens, limitando a 10
  const handleImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + images.length > 10) {
      alert('Máximo de 10 imagens.');
      return;
    }
    setImages((prev) => [...prev, ...selectedFiles]);
  };

  // Manipula o submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('purchasePrice', purchasePrice);
    formData.append('salePrice', salePrice);
    formData.append('description', description);
    formData.append('supplierLink', supplierLink);

    images.forEach((file, index) => {
      formData.append(`image_${index}`, file);
    });

    console.log('Dados do produto:', {
      productName,
      purchasePrice,
      salePrice,
      description,
      supplierLink,
      images,
    });
    // Se quiser limpar o formulário (opcional):
    // setProductName('');
    // setPurchasePrice('');
    // setSalePrice('');
    // setDescription('');
    // setSupplierLink('');
    // setImages([]);
  };

  return (
    <Container className="product-form-container mt-4">
      <h4 className="form-title mb-4">Cadastro de Produto</h4>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Nome do Produto */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formProductName" className="mb-3">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control
                type="text"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>
          </Col>

          {/* Link do Fornecedor */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formSupplierLink" className="mb-3">
              <Form.Label>Link do Fornecedor</Form.Label>
              <Form.Control
                type="text"
                value={supplierLink}
                onChange={(e) => setSupplierLink(e.target.value)}
              />
            </Form.Group>
          </Col>

          {/* Preço de Compra */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formPurchasePrice" className="mb-3">
              <Form.Label>Preço de Compra</Form.Label>
              <Form.Control
                type="text"
                required
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
            </Form.Group>
          </Col>

          {/* Preço de Venda */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formSalePrice" className="mb-3">
              <Form.Label>Preço de Venda</Form.Label>
              <Form.Control
                type="text"
                required
                value={salePrice}
                decimalScale={2}
                onChange={(e) => setSalePrice(e.target.value)}
              />
            </Form.Group>
          </Col>

          {/* Descrição */}
          <Col xs={12}>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>

          {/* Upload de Imagens */}
          <Col xs={12} md={6} className="mb-3">
            <Form.Label>Enviar Imagens (até 10)</Form.Label>
            <div>
              <Button variant="primary" as="label" className="upload-button">
                Selecionar Imagens
                <Form.Control
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImagesChange}
                  style={{ display: 'none' }}
                />
              </Button>
            </div>
            <small className="text-muted">
              {images.length} imagem(ns) selecionada(s).
            </small>
          </Col>

          {/* Pré-visualização das imagens */}
          <Col xs={12} md={6} className="mb-3">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {images.map((file, index) => (
                <div
                  key={index}
                  style={{
                    width: '80px',
                    height: '80px',
                    border: '1px solid #999',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Botão de Envio */}
        <div className="d-flex justify-content-end">
          <Button variant="secondary" type="submit" className="submit-button">
            Cadastrar Produto
          </Button>
        </div>
      </Form>
    </Container>
  );
}
