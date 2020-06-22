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
        $number = random_int(0, 100);
        return $this->render('upload.html.twig',[]);
    }
}
