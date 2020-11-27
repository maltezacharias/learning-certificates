<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UploadController extends AbstractController
{
    /**
     * @Route("/Upload", name="Upload")
     */
    public function list()
    {
        return $this->render('upload.html.twig',[]);
    }
}
