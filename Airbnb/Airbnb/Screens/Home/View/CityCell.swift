//
//  LocalSiteCell.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/25.
//

import UIKit

class CityCell: UICollectionViewCell {

    static let id = "CityCell"

    private var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleToFill
        let image = UIImage(named: "서울")
        imageView.image = image
        imageView.layer.cornerRadius = 10
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()

    private var cityName: UILabel = {
        let label  = UILabel()
        label.text = "서울"
        label.font = .smallBold
        return label
    }()

    private var distance: UILabel = {
        let label = UILabel()
        label.text = "차로 30분 거리"
        label.font = .smallRegular
        label.textColor = .gray3
        return label
    }()

    private lazy var stackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: [cityName, distance])
        stackView.axis = .vertical
        stackView.spacing = 4
        stackView.distribution = .fill
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        configureDisplay()
        configureConstraints()
    }

    private func configureDisplay() {
        self.contentView.addSubview(imageView)
        self.contentView.addSubview(stackView)
    }

    private func configureConstraints() {
        NSLayoutConstraint.activate([

            imageView.topAnchor.constraint(equalTo: self.contentView.topAnchor),
            imageView.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor),
            imageView.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor, constant: -179),
            imageView.heightAnchor.constraint(equalTo: self.contentView.heightAnchor, constant: -10),

            stackView.leadingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: 16),
            stackView.centerYAnchor.constraint(equalTo: imageView.centerYAnchor)
        ])
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

}
